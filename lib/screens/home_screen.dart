import 'package:flutter/material.dart';
import 'consonant_screen.dart';
import 'vowel_screen.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('한글 공부')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SizedBox(
              width: 200,
              child: ElevatedButton(
                child: Text('자음 공부'),
                onPressed: () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => ConsonantScreen()));
                },
              ),
            ),
            SizedBox(height: 20),
            SizedBox(
              width: 200,
              child: ElevatedButton(
                child: Text('모음 공부'),
                onPressed: () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => VowelScreen()));
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}