#include <stdio.h.>


int main(){

	double num1;
	double num2;
	char ope;
	
		printf("ENTER FIRST NUMBER: ");
		scanf("%lf", &num1);
		
		printf("ENTER SECOND NUMBER: ");
		scanf("%lf", &num2);
		
		printf("\n\nEnter sign of operation \n add      (+) \n subtract (-) \n multiply (*) \n divide   (/) \n \n");
		printf(">>>>  ");
		scanf("%s", &ope);
	
	if (ope == '+'){
	double sum = num1+num2;
		printf("\n %lf", sum);
		
	}else if (ope == '-'){
	double diff = num1-num2;
		printf("\n %lf", diff);
	
	}else if (ope == '*'){
	double diff = num1*num2;
		printf("\n %lf", diff);
		
	}else if (ope == '/'){
	double diff = num1/num2;
		printf("\n %lf", diff);
		
	}else {
		printf("\n syntax error");
	}
	
	return 0;
}

