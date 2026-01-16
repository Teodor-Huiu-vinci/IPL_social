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

    describe('must have a point after @', ()=>{
        it('must return false if no point after@', ()=>{

            //Arrange
            const email = 'test@example';

            //act
            const result = validEmail(email);

            //Assert
            expect(result).toBe(false);
        });
        it('must accept a enmail with . after @',()=>{

            //Arrange
            const email = 'Test@exampole.com';
            //Act
            const result = validEmail(email)
            //Assert
            expect(result).toBe(true);
        });

        it('must reject return false if . is the last caracthere',()=>{


            //arrange
            const email = 'test@eample.';
            //Act
            const result = validEmail(email);
            //Assert
            expect(result).toBe(false)
        })
    });
    describe ('must have no spaces',()=>{
        it('must reject email with space',()=>{
            //Assert
            const email = 'test @example.com'
            //Act
            const result = validEmail(email);
            //Assert 
            expect(result).toBe(false);
        });

        it('must accept email without space',()=>{
            //Arrange
            const email = "test@example.com"
            //act
            const result = validEmail(email);
            
            //Arrange
            expect(result).toBe(true)
        })
    })
});
