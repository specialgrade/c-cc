#include <stdio.h>
int main() {
    int BSIT[5];

    printf("BSIT ARRAY VALUES\n\n");
    for (int i = 0; i < 5; i++) {
        printf("Enter value %d: ", i + 1);
        scanf("%d", &BSIT[i]);
    }

    printf("Array BSIT: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", BSIT[i]);
    }

    int sum = 0;
    for (int i = 0; i < 5; i += 2) {
        sum += BSIT[i];
    }
    printf("\nSum of elements at even indices: %d\n", sum);

    return 0;
}


