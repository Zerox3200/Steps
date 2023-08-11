export let user;
export let userEmail;
export const Name_Submit = "Submitting"
export const Email_Submit = "Email"
export const Phone_Submit = "Phone"

export const SavingName = (user) => {
    return {
        type: Name_Submit,
        payload: user
    }
}
export const SavingEmail = (user) => {
    return {
        type: Email_Submit,
        payload: user
    }
}
export const SavingPhone = (user) => {
    return {
        type: Phone_Submit,
        payload: user
    }
}