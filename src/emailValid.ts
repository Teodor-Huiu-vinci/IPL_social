

/**
 * Check if an email fit the IPL email standarts
 * @param email - The email that need to be checked
 * @return 
 */

export function validEmail(email: string): boolean {
    if(!email.includes('@')){
        return false
    }
    return true;
}