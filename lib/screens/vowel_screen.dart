import 'package:flutter/material.dart';
import '../services/tts_service.dart';
import 'package:provider/provider.dart';
import 'dart:convert';
import 'package:flutter/services.dart';

class VowelScreen extends StatefulWidget {
  @override
  State<VowelScreen> createState() => _VowelScreenState();
}

class _VowelScreenState extends State<VowelScreen> {
  Map<String, dynamic> vowelData = {};

  @override
  void initState() {
    super.initState();
    loadJson();
  }

  Future<void> loadJson() async {
    final String response = await rootBundle.loadString('assets/data/vowels.json');
    final data = await json.decode(response);
    setState(() {
      vowelData = data;
    });
  }

  @override
  Widget build(BuildContext context) {
    final tts = Provider.of<TTSService>(context);
    return Scaffold(
      appBar: AppBar(title: Text('모음 공부')),
      body: ListView(
        padding: EdgeInsets.all(16),
        children: vowelData.entries.map((entry) {
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
                        title: Text('$letter 이 포함된 단어'),
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