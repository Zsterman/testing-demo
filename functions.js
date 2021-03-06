let colors = ['Red', 'Green', 'Blue']

module.exports = {
    stateAge: (age) => {
        return `I am ${age}.`
    },
    addUser:(name, age) => {
        let user = {
            name,  
            age
        }

        if(age >= 21){
            return user
        } else {
            return "User not old enough"
        }
    },
    addColor: (color) => {
        colors.push(color.toLowerCase())
        return colors
    }
}

