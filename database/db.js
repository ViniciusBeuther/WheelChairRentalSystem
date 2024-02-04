import Loan from "../objects/Loan";

const database = [
    {
        "id": 1,
        "name": "Vinicius Beuther",
        "cpf": "12345678900",
        "birthdayDate": "13/11/2002",
        "address": {
            "st": "St. Iracema",
            "number": "440",
            "neighborhood": "Cruzeiro",
            "zipcode": "89.286-318",
            "city": "São Bento do Sul",
            "state": "SC"
        },
        "phoneNumber": "47 91234-5678",
        "email": "email@gmail.com",
        "loan": [new Loan(1000, 12, "WheelChair", 10)]
    },
    {
        "id": 2,
        "name": "Carla Grossl",
        "cpf": "12345678900",
        "birthdayDate": "11/06/2005",
        "address": {
            "st": "St. Carlos Something",
            "number": "111",
            "neighborhood": "Somewhere",
            "zipcode": "12.345-678",
            "city": "São Bento do Sul",
            "state": "SC"
        },
        "phoneNumber": "47 12345-6789",
        "email": "email2@gmail.com",
        "loan": new Loan(800, 10, "WheelChair", 12)
    }
]

export default database