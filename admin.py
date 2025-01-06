import cmd
import shlex
from pymongo import MongoClient
from bson.objectid import ObjectId

# MongoDB connection setup
client = MongoClient("mongodb://localhost:27017/")  
db = client["alx"]  #  database name

class DuNavDirCLI(cmd.Cmd):
    intro = "Welcome to the Dilla University - Campus Navigation and Directories Web App Admin CLI. Type help or ? to list commands.\n"
    prompt = "DuNavDir: "

    def do_use(self, arg):
        """Switch to a specific collection: use collection_name"""
        self.current_collection = db[arg]
        print(f"Switched to collection: {arg}")

    def do_add(self, arg):
        """Add a new record with dynamic fields: add key1=value1 key2=value2 ..."""
        if not hasattr(self, 'current_collection'):
            print("No collection selected. Use 'use collection_name' to select a collection first.")
            return

        try:
            # fields = dict(item.split("=") for item in arg.split())
            fields=self.parse_key_value_pairs(arg)
            result = self.current_collection.insert_one(fields)
            print(f"Record added with ID: {result.inserted_id}")
        except ValueError:
            print("Invalid input. Usage: add key1=value1 key2=value2 ...")

    def do_list(self, arg):
        """List all records in the current collection: list"""
        if not hasattr(self, 'current_collection'):
            print("No collection selected. Use 'use collection_name' to select a collection first.")
            return

        records = self.current_collection.find()
        for record in records:
            print(record)

    def do_update(self, arg):
        """Update a record dynamically by ID: update record_id key1=value1 key2=value2 ..."""
        if not hasattr(self, 'current_collection'):
            print("No collection selected. Use 'use collection_name' to select a collection first.")
            return

        try:
            parts = shlex.split(arg)
            record_id = parts[0]
            updates = self.parse_key_value_pairs(" ".join(parts[1:]))
            result = self.current_collection.update_one(
                {"_id": ObjectId(record_id)},
                {"$set": updates}
            )
            if result.matched_count > 0:
                print("Record updated successfully.")
            else:
                print("No record found with the given ID.")
        except Exception as e:
            print(f"Error: {e}")

    def do_delete(self, arg):
        """Delete a record in the current collection by ID: delete record_id"""
        if not hasattr(self, 'current_collection'):
            print("No collection selected. Use 'use collection_name' to select a collection first.")
            return

        try:
            record_id = arg.strip()
            result = self.current_collection.delete_one({"_id": ObjectId(record_id)})
            if result.deleted_count > 0:
                print("Record deleted successfully.")
            else:
                print("No record found with the given ID.")
        except Exception as e:
            print(f"Error: {e}")

    def do_exit(self, arg):
        """Exit the CLI: exit"""
        print("Goodbye!")
        return True

    def emptyline(self):
        pass  # Do nothing on empty input

    def parse_key_value_pairs(self, input_str):
        """Parse key-value pairs from a string, handling quotes."""
        try:
            parts = shlex.split(input_str)  # Split input while respecting quotes
            return {key.strip(): value.strip() for key, value in (item.split("=", 1) for item in parts)}
        except Exception:
            raise ValueError("Invalid key=value format or unbalanced quotes.")

if __name__ == "__main__":
    DuNavDirCLI().cmdloop()
