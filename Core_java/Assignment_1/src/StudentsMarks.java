import java.util.Scanner;

public class StudentsMarks {

	public static void main(String[] args) {
		int totalA=0,totalB=0,totalC=0,totalMarks=0;
		int total1=0, total2=0, total3=0;
		float avgA=0, avgB=0, avgC=0  ;
		
		Scanner scan = new Scanner(System.in);
		
		// Entering the marks of each subject for three students..
		int a[] = new int[3];
		int b[] = new int[3];
		int c[] = new int[3];
		
		int i,j;
		System.out.println("Enter the marks of subject A for Three Students...");
		for  (i = 0; i < a.length; i++) 
		{
			a[i]= scan.nextInt();
		}
		System.out.println("Enter the marks of subject B for Three Students...");
		for  (i = 0; i < b.length; i++) 
		{
			b[i]= scan.nextInt();
		}
		System.out.println("Enter the marks of subject C for Three Students...");
		for  (i = 0; i < c.length; i++) 
		{
			c[i]= scan.nextInt();
		}
		
		System.out.println("Calculating Total of marks for each subject...");
		for ( j = 0; j < a.length; j++) 
		{
			totalA+=a[j];
			
			totalB+=b[j];
			
			totalC+=c[j];
			
		}
		System.out.println("TotalA= "+ totalA);
		System.out.println("TotalB= "+ totalB);
		System.out.println("TotalC= "+ totalC);
		System.out.println("Calculating Avg marks for each subject...");
		System.out.println("AvgA= "+ (totalA/3));
		System.out.println("AvgB= "+ (totalB/3));
		System.out.println("AvgC= "+ (totalC/3));
		
		
		
		
		int stu[]= new int[3];
		//total marks of each student...
		for (int k = 0; k < stu.length; k++)
		{
			stu[k]= a[k]+b[k]+c[k];
		}
		
	
		//average of each student...
		for(i=0;i<stu.length;i++)
		{
			System.out.println("student " + (i+1) + ":");
			System.out.println("Total : "+ stu[i]+ "& Avg :" + (stu[i]/3));
		}
		
		
	}
}
