package springcore.spel;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context= new ClassPathXmlApplicationContext("springcore/spel/config.xml");
		Demo d=(Demo) context.getBean("demo");
		System.out.println(d);

	}

}
