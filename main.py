import os
import json


username = input("Enter your username: ")

if not username:
    print("Username is required, Try again..")
    exit("PEACE....")

username = username.replace(" ", "")

path = os.path.join(os.getcwd(), 'data.json')

userObj = {
    f"{username}": []
}


# Checking if data.json file exists
if not os.path.exists(path):
    with open(path, 'w+') as f:
        # f.write('{}')
        json.dump(userObj, f, indent=2)

else:
    with open(path, 'r') as f:
        print('Reading........')
        userObj = json.load(f)
        # print(userObj)

# Checking if the username is new
if not username in userObj.keys():
    print('Ni hai......')
    userObj[f"{username}"] = []


while True:
    print("TO EXIT, INPUT THE AMNT VALUE AS -1")
    date = input('Date of investment (format: DD/MM/YYYY): ')

    currency = input('Your Currency: (Don\'t put symbols, Default: INR): ')
    if not currency:
        currency = "INR"

    amnt = int(input('Amount you invested: '))

    if amnt == -1:
        break

    obj = {
        'date': date,
        'currency': currency,
        'amnt': amnt
    }
    userObj[f"{username}"].append(obj)

with open(path, 'w') as f:
    json.dump(userObj, f, indent=2)
