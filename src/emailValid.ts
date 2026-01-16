

/**
 * Check if an email fit the IPL email standarts
 * @param email - The email that need to be checked
 * @return 
 */

export function validEmail(email: string): boolean {
    if(!email.includes('@')){
        return false
    }
    // test 2: muste have a point after @

    const atIndex = email.indexOf('@');
    const domainPart = email.substring(atIndex+1);

    if(!domainPart.includes('.')){
        return false
    }
    if(email.endsWith('.')){
        return false;
    }
    return true;
}
