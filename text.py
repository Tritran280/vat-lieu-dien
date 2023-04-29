import json

with open('D:\\caro-web-js\\test\\data.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Process the data
questions = {}
for i in range(0, len(lines), 6):
    if i+5 >= len(lines):
        print("Error: input file is too short.")
        break
    question = lines[i].strip()
    options = [opt.strip() for opt in lines[i+1:i+5]]
    true_option_line = lines[i+5].strip()
    true_option = int(true_option_line) if true_option_line else None
    questions[f"question{i//6+1}"] = {
        "id": i//6+1,
        "question": question,
        "options": options,
        "trueOption": true_option
    }


# Convert to JSON
json_data = json.dumps(questions, indent=4, ensure_ascii=False)

# Print the JSON data
print(json_data)
