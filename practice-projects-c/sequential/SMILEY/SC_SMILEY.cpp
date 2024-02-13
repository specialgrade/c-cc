#include <stdio.h>

int main()
{
	int a,b,c,d,name;
	printf ("Please enter your name:\n");
	scanf ("%s", name);
	printf ("Please input three numbers:\n");
	scanf ("%d%d%d", &a,&b,&c);
	d=(a+b+c)*2;
	printf ("Hello %s twice the number of %d%d%d is %d :):):)", name,a,b,c);
	return 0;
}
