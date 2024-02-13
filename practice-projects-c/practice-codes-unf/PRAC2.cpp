#include <stdio.h>

int main() {
    int num[12];
    int target, occurrences = 0;

    printf("Enter twelve numbers:\n");
    for (int i = 0; i < 12; ++i) {
        scanf("%d", &num[i]);
    }

    printf("Enter a number to search: ");
    scanf("%d", &target);

    for (int i = 0; i < 12; ++i) {
        if (num[i] == target) {
            occurrences++;
        }
    }

    printf("Occurrences: %d\n", occurrences);

    return 0;
}

