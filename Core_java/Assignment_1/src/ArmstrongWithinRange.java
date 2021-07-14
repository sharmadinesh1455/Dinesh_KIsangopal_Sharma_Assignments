import java.util.Scanner;

public class ArmstrongWithinRange {
	public static void main(String[] args) 
	{
		
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter Lower Limit: ");
		int low = scan.nextInt();
		System.out.println("Enter Upper Limit");
		int up = scan.nextInt();
		
		scan.close();
		
		for (int i = low; i <= up; i++) {
			if(isArmstrong(i))
			{
				System.out.println(i);
			}
			
		}
	}
	
	static boolean isArmstrong(int num)
	{
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
		if(sum == num)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

}
