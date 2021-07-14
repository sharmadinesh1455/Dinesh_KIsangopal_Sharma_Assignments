import java.util.Scanner;

public class Armstrong_num {

	public static void main(String[] args) 
	{
		

			
			Scanner sc= new Scanner(System.in);
			System.out.println("Enter a number: ");
			int num = sc.nextInt();
			
			
			double sum=0;
			int dig=0, last=0; 
			int temp = num;
			
			while(temp>0)
			{
				dig+=1;
				temp=temp/10;
			}
			
			temp=num;
			while(temp>0)
			{
				last= temp%10;
			    sum = sum + Math.pow(last, dig);
			    temp = temp/10;
			}
			if(num==sum)
				System.out.println("Number is Armstrong");
			else
				System.out.println("Number is not Armstrong number");
			sc.close();
		
	}
}

