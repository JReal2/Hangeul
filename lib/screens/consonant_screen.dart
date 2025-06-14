import 'package:flutter/material.dart';
import '../services/tts_service.dart';
import 'package:provider/provider.dart';
import 'dart:convert';
import 'package:flutter/services.dart';

class ConsonantScreen extends StatefulWidget {
  @override
  State<ConsonantScreen> createState() => _ConsonantScreenState();
}

class _ConsonantScreenState extends State<ConsonantScreen> {
  Map<String, dynamic> consonantData = {};

  @override
  void initState() {
    super.initState();
    loadJson();
  }

  Future<void> loadJson() async {
    final String response = await rootBundle.loadString('assets/data/consonants.json');
    final data = await json.decode(response);
    setState(() {
      consonantData = data;
    });
  }

  @override
  Widget build(BuildContext context) {
    final tts = Provider.of<TTSService>(context);
    return Scaffold(
      appBar: AppBar(title: Text('자음 공부')),
      body: ListView(
        padding: EdgeInsets.all(16),
        children: consonantData.entries.map((entry) {
          final letter = entry.key;
          final words = List<String>.from(entry.value);
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
                          children: words.map((word) {
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