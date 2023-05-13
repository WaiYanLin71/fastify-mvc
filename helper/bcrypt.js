import bcrypt from 'bcrypt'

export const hash = (myPlaintextPassword, saltRounds = 10) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(myPlaintextPassword, salt);
}