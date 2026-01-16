import {validEmail} from '../src/emailValid';


describe('EmailValid', () =>{
    describe('must have a @', ()=>{
        it('should return false if email does not have @', ()=>{
            //Arrange
            const email = 'testemail.com';
            //Act
            const result = validEmail(email);
            //Assert
            expect(result).toBe(false);
    });
        it('should return true if email has @', ()=>{
            //Arragne
            const email = 'testemail@example.com'
            //Act
            const result = validEmail(email);
            //Assert
            expect(result).toBe(true);
        });
    });
});