import java.util.Scanner;

public class Validation {

	public static void main(String[] args) 
	{
		
		Scanner scan = new Scanner(System.in);

		String UserName = "Dinesh";
		String UserPassword = "1234";
		
		int count =3;
		
		while(count>0)
		{
			
			String name, password;
			System.out.println("Hey User, Enter Your Name : ");
			name = scan.next();
			System.out.println("Enter Your Password : ");
			password = scan.next();
			
			if((password.equals(UserPassword)) && (UserName.equals(name)))
			{
				System.out.println("Welocme " +name);
				break;
			}
			
			
			else
			{
				count -= 1;
				if(count==0)
					System.out.println("Hey User, Please Contact Admin!!!");
			}
		}
		
}
}