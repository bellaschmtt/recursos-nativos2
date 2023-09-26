import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, Platform } from 'react-native';
import * as Notification from "expo-notifications";
import * as Permissions from 'expo-permissions';

export default function App() {
  const [schedule, setSchedule] = useState([]);
  const [notificationText, setNotificationText] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  async function getNotificationPermission() {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      alert('Você não concedeu permissão para notificações!');
    }
  }

  async function scheduleNotification() {
    const dateArray = selectedDate.split('-');
    const timeArray = selectedTime.split(':');
    const year = parseInt(dateArray[0]);
    const month = parseInt(dateArray[1]);
    const day = parseInt(dateArray[2]);
    const hour = parseInt(timeArray[0]);
    const minute = parseInt(timeArray[1]);

    // const trigger = new Date(year, month - 1, day, hour, minute);
    const trigger = new Date(Date.now() + 60 * 60 * 1000);
    trigger.setMinutes(0);
    trigger.setSeconds(0);

    await Notification.scheduleNotificationAsync({
      content: {
        title: 'Lembrete de Cuidados',
        body: notificationText,
      },
      trigger: {
        date: trigger,
      },
    });

    setSchedule([...schedule, notificationText]);
    setNotificationText('');
    setSelectedDate('');
    setSelectedTime('');
    console.log('Enviado');
  }

  return (
    <View>
      <Text>Agendamento de Notificações</Text>
      <Button title="Permitir Notificações" onPress={getNotificationPermission} />
      <TextInput
        placeholder="Digite a notificação"
        value={notificationText}
        onChangeText={text => setNotificationText(text)}
      />
      <TextInput
        placeholder="Data (YYYY-MM-DD)"
        value={selectedDate}
        onChangeText={text => setSelectedDate(text)}
      />
      <TextInput
        placeholder="Hora (HH:MM)"
        value={selectedTime}
        onChangeText={text => setSelectedTime(text)}
      />
      <Button title="Agendar Notificação" onPress={scheduleNotification} />
      <ScrollView>
        {schedule.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </ScrollView>
    </View>
  );
}
