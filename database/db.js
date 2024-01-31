import Loan from "../objects/Loan";

const database = [
    {
        "id": 1,
        "name": "Vinicius Beuther",
        "cpf": "123.456.789-00",
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
        "loan": new Loan(1000, 12, "WhellChair", 10)
    },
    {
        "id": 2,
        "name": "Carla Grossl",
        "cpf": "987.654.321-00",
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
        "loan": new Loan(800, 10, "WhellChair", 12)
    }
]

export default database