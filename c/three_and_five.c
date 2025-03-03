#include <stdio.h>

main(){

    printf ("Finding the sum of all the multiples of 3 or 5 below 1000.\n");

    int i;
    int isum = 0;

    for(i = 1; i < 1000; i++){
        if(calculate(i,3)==1){
            isum += i;
            printf("The sum so far is %d\n", isum);
        }
        else if(calculate(i,5)==1){
            isum += i;
            printf("The sum so far is %d\n", isum);
        }


    }

    printf("\n%d is the sum of multiples of 3 and 5 below 1000.\n", isum);
}

calculate (int i, int divisor){

    FILE * pFile;

    int mod = i % divisor;

    if(mod == 0){

        printf("%d", i);
        printf(" is a multiple of %d\n", divisor);

        pFile = fopen ("divisible.txt", "a");

        if(!pFile){
            printf("Error opening file");
             return(1);
        }
        else{
            fprintf(pFile, "%d is a multiple of %d\n", i, divisor);
            fclose(pFile);
            return(1);
        }

    }

    return(0);

}
