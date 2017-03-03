export class demo{
    constructor(){

    }

    addNumbers: any = (firstNumber: number, secondNumber: number) => {
        let result = firstNumber + secondNumber;
        return result;
    }
    
    HelloWorld(helloWorld: HelloWorldInterface): string{
        return helloWorld.message;
    }
}
export interface HelloWorldInterface{
    message: string;
}
