import 'package:flutter/material.dart';
import '../services/tts_service.dart';
import 'package:provider/provider.dart';

final consonants = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
final consonantWords = {
  'ㄱ': ['고양이', '가방'],
  'ㄴ': ['나무', '노래'],
};

class ConsonantScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final tts = Provider.of<TTSService>(context);
    return Scaffold(
      appBar: AppBar(title: Text('자음 공부')),
      body: ListView(
        padding: EdgeInsets.all(16),
        children: consonants.map((letter) {
          return Card(
            margin: EdgeInsets.symmetric(vertical: 10),
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  GestureDetector(
                    onTap: () => tts.speak(letter),
                    child: Text(letter, style: TextStyle(fontSize: 48)),
                  ),
                  SizedBox(height: 10),
                  ElevatedButton(
                    child: Text('단어 보기'),
                    onPressed: () => showDialog(
                      context: context,
                      builder: (_) => AlertDialog(
                        title: Text('$letter 로 시작하는 단어'),
                        content: Wrap(
                          spacing: 10,
                          children: (consonantWords[letter] ?? []).map((word) {
                            return ElevatedButton(
                              child: Text(word),
                              onPressed: () => tts.speak(word),
                            );
                          }).toList(),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          );
        }).toList(),
      ),
    );
  }
}