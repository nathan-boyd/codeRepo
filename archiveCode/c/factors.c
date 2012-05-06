#include <stdio.h>

main(){

    long lLargeFactor;
    long iLarge = 600851475143;
    long seed1 = 1;
    long seed2 = 2;
    long prime;
    int i;

    printf ("Finding the largest prime factor of the number 600851475143.\n");

    for(i = 0; i < iLarge; i++){

        if(iLarge % (iLarge -i ) == 0){
            if(is_prime(i)){
                lLargeFactor = i;
                printf("The largest prime factor of 600851475143 is %d \n", lLargeFactor);
                return(0);
            }
        }
    }
}

is_prime(long number){

    int d;

    if (number < 2)
        return(0);

    for (d = 2; d * d <= number; d++){
        if (number % d == 0)
            return(0);
    }
    return(1);
}
