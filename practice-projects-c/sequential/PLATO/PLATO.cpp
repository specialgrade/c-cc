#include <stdio.h>

int main(){
	char name[50];
	int age, IPA;
	
	printf("Your name pls\n");
	scanf("%s", name);
	
	printf("%s your age pls\n", name);
	scanf("%d", &age);
	
	IPA = age/2+7;
	
	printf("%s your ideal partner's age is %d \n", name, IPA);
	
	return 0;
}
