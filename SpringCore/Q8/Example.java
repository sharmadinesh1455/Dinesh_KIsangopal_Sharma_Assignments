package beanlifecycle;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

public class Example {
	private String subject;

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		System.out.println("Setting the Subject");
		this.subject = subject;
	}

	@Override
	public String toString() {
		return "Example [subject=" + subject + "]";
	}

	public Example() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Example(String subject) {
		super();
		this.subject = subject;
	}
	
	
	@PostConstruct
	public void start() {
		System.out.println("Init Method Started..... ");
	}
	
	@PreDestroy
	public void end()
	{
		System.out.println("At Destroy Method.....");
	}
	

}
