main(){

    printf ("Finding the sum of all the even terms in the Fibonacci sequence below 4 million.\n");

//    1, 2, 3, 5, 8, 13, 21, 34

    int fib = 3;
    int isum = 2;
    int prevA = 1;
    int prevB = 2;

    while(fib < 4000000){

        printf("The next number in the Fibonacci sequence is %d\n", fib);

        int mod = fib % 2;
        if(mod==0){
            printf("The number %d is even and will be added to the total", fib);
            isum += fib;
            printf("The sum so far is %d\n", isum);
        }

        prevA = prevB;
        prevB = fib;
        fib = prevA+prevB;

    }

    printf("\n%d is the sum of of all the even terms in the Fibonacci sequence below 4 million.\n", isum);
}

