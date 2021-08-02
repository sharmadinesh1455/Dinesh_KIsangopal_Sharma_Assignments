package com.springcore.annotations.inject;

import org.springframework.beans.factory.annotation.Autowired;

public class Employee {

	//@Autowired
	private Address address;
	
	@Autowired
	public void setAddress(Address address) {
		this.address = address;
	}
	//@Autowired
	public Employee(Address address)
	{
		super();
		this.address = address;
	}

	public Employee() 
	{
		super();
	}
		

	@Override
	public String toString() {
		return "Employee [address=" + address + "]";
	}

	
	
}
