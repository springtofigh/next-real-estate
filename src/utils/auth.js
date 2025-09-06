import { compare, hash } from "bcryptjs";

async function hashPassword(password) {
    const hashedPassword = await hash(password, 12);
    return hashedPassword
}

async function verifyPassword(password, hashedPassword) {
    const isValid = await compare(password, hashedPassword);
    console.log(isValid);
    return isValid;
}

export { hashPassword, verifyPassword }