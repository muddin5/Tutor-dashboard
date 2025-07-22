import csv
import json
from pathlib import Path

# Paths
csv_file = Path(__file__).parent / "students.csv"
json_file = Path(__file__).parents[1] / "src" / "data" / "students.json"

# Read CSV
with open(csv_file, newline='', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    data = list(reader)

# Optional: convert "Subjects" string to list
for student in data:
    student["Subjects"] = [s.strip() for s in student["Subjects"].split(";")]

# Write to JSON
with open(json_file, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f" Wrote {len(data)} student records to: {json_file}")
