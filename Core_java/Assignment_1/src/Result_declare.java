import java.util.Scanner;

public class Result_declare 
{
	public void result(int m1, int m2, int m3)
	{
		if((m1>60) && (m2>60) && (m3>60))
		{
			System.out.println("Passed...");
		}
		else if(((m1>60) && (m2>60)) || ((m1>60) && (m2>60)) || ((m2>60) && (m3>60)))
		{
			System.out.println("Promoted");
		}
		else if(((m1>60 || m2>60 ||m3>60) || (m1<60 && m2<60 && m3<60)))
		{
			System.out.println("Failed");
		}
		
		
		
	}
	

public static void main(String[] args)
    {
	
	    Scanner scan = new Scanner(System.in);
	    System.out.println("Enter m1 Marks: ");
	    int m1 = scan.nextInt();
	    System.out.println("Enter m2 Marks: ");
	    int m2 = scan.nextInt();
	    System.out.println("Enter m3 Marks: ");
	    int m3 = scan.nextInt();
		Result_declare obj = new Result_declare();
		obj.result(m1, m2, m3);
		scan.close();
	
    }	
}

