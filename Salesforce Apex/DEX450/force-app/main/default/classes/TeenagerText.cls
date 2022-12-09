public with sharing class TeenagerText {

	Integer msgCount = 0;
	Map<Integer, String> mapResponses = new Map<Integer, String>();
	
	public TeenagerText() {
		mapResponses.put(0,'whatever');
		mapResponses.put(1,'lol');
		mapResponses.put(2,'omg');
		mapResponses.put(3,'?');
		mapResponses.put(4,':)');		
	}
	
	public String Communicate(String sMsg) {
		String s = mapResponses.get(msgCount);
		msgCount++;
		if (msgCount > 4) {
			msgCount = 0;

		}
		return s;
	}
	
	
}


/* Execute anonymous code to test

TeenagerText tt = new TeenagerText();


System.Debug(tt.Communicate('What up?'));
System.Debug(tt.Communicate('What do you mean?'));

TeenagerText tt2 = new TeenagerText();
System.Debug(tt2.Communicate('What up?'));

*/
