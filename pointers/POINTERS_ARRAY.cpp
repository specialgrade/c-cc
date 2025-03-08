#include <stdio.h>
int main() {
	
	int A[5] = {2, 4, 6, 8, 10};
	// address ng array nagsisimula sa first element
	// A = A[0]
	int *B;
	
	B = A;
	
	printf("The address of 1st element is %x\n", &A[0]);
	printf("The address of 2nd element is %x\n", &A[1]);
	printf("The address of 3rd element is %x\n", &A[2]);
	printf("The address of 4th element is %x\n", &A[3]);
	printf("The address of 5th element is %x\n\n", &A[4]);

	printf("The address of 1st element is %x\n", A);
	// same with the &A[0]
	printf("The value of 1st element is %x\n", *A);
	printf("The address of 2nd element is %x\n", *(A+1));
	printf("The address of 4th element is %x\n", *(A+3));
	
	printf("The address of 2nd element is %x\n", ++B);
	printf("The address of 5th element is %x\n", --B + 4);
	printf("The address of 4th element is %x\n", &A[3]);
	printf("The address of 5th element is %x\n", &A[4]);
	
	return 0;
}