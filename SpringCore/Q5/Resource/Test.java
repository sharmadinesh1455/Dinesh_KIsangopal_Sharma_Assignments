package com.springcore.annotations;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	public static void main(String args[]) {
		// TODO Auto-generated method stub

	
	ApplicationContext ac = new ClassPathXmlApplicationContext("com/springcore/annotations/anootationconfig.xml");
	 
    Employee emp = ac.getBean("myemp", Employee.class);
    System.out.println(emp.toString());
	}

}
