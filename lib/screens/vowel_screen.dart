import 'package:flutter/material.dart';
import '../services/tts_service.dart';
import 'package:provider/provider.dart';

final vowels = ['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'];
final vowelWords = {
  'ㅏ': ['사과', '바다'],
  'ㅓ': ['거미', '너구리'],
};

class VowelScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final tts = Provider.of<TTSService>(context);
    return Scaffold(
      appBar: AppBar(title: Text('모음 공부')),
      body: ListView(
        padding: EdgeInsets.all(16),
        children: vowels.map((letter) {
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
                        title: Text('$letter 이 포함된 단어'),
                        content: Wrap(
                          spacing: 10,
                          children: (vowelWords[letter] ?? []).map((word) {
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