package springcore.spel;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Demo {
	@Value("#{10+10}")
	private int X;
	@Value("#{100+100}")
	private int Y;
	public int getX() {
		return X;
	}
	public void setX(int x) {
		X = x;
	}
	public int getY() {
		return Y;
	}
	public void setY(int y) {
		Y = y;
	}
	@Override
	public String toString() {
		return "demo [X=" + X + ", Y=" + Y + "]";
	}
	


}
