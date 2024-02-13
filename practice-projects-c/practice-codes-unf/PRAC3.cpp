#include <stdio.h>

int main() {
    int num[11];
    int sumpairs[10];

    printf("ENTER 11 NUMBERS\n\n");
    for (int i = 0; i < 11; i++) {
    	printf("Enter value %d: ", i + 1);
        scanf("%d", &num[i]);
    }

    for (int i = 0; i < 10; i++) {
        sumpairs[i] = num[i] + num[i + 1];
    }

    printf("SUM of TWO succeeding pairs: ");
    for (int i = 0; i < 10; i++) {
        printf(" %d", sumpairs[i]);
    }

    return 0;
}

