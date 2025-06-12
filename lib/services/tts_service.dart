import 'package:flutter_tts/flutter_tts.dart';
import 'package:flutter/material.dart';

class TTSService extends ChangeNotifier {
  final FlutterTts _tts = FlutterTts();

  TTSService() {
    _tts.setLanguage('ko-KR');
    _tts.setSpeechRate(0.5);
    _tts.setPitch(1.0);
  }

  Future<void> speak(String text) async {
    await _tts.stop();
    await _tts.speak(text);
  }
}