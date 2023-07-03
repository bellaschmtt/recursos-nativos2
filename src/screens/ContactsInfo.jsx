import { StyleSheet, Text, View, FlatList } from "react-native";
import { useCallback, useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import * as Notification from "expo-notifications";
import Items from "../components/Items";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../components/Header";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
    },
});

export default function ContactsInfo({ navigation }) {
    const [contacts, setContact] = useState();
    async function carregarContatos() {
        const { data } = await Contacts.getContactsAsync({
            fields: [
                Contacts.Fields.Emails, 
                Contacts.Fields.PhoneNumbers,
                // Contacts.Fields.ImageAvailable,
                // Contacts.Fields.Image,

            ],
        })
        setContact(data)
        console.log(data)
        // if (data.length > 0) {
        //     const contact = data[0];
        //     console.log(contacts);
        // }
    }
    // useFocusEffec = efeito que deixa a tela de segundo plano quando não acionada
    useFocusEffect(
        useCallback(() => {
            (async () => {
                const { status } = await Contacts.requestPermissionsAsync();
                if (status === 'granted') {
                   await carregarContatos();
                }
            })();
        }, [])
    ); 

    async function notifContacts() {
        const token = await Notification.scheduleNotificationAsync({
            content: {
                title: "Mensagem",
                subtitle: "Contato",
                body: "Você tem um novo contato",
                data: { id: "1" },
                
            },

            trigger: { seconds: 3 },
        });
    }

    return (
        <View styles={styles.container}>
            <Header title="Contatos"/>
            <Text>Contatos</Text>
            <View>
                {
                    contacts
                    ? <FlatList
                        onPress={() => navigation.navigate("ContactsInfo")}
                        styles={{
                            flex: 1,
                            gap: 10,
                        }}
                        data={contacts}
                        // extrair a chave para cada item ter uma chave especifica
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            // ITEMS É O COMPONENTE QUE CRIAMOS PARA RENDERIZAR OS CONTATOS ESTÁ EM COMPONENTS/ITEMS - TEAMS
                            <Items 
                                item={item}
                                notifContacts={notifContacts}
                            />
                            
                        )}
                        
                    />
                    
                    : <></>
                    

                }
            </View>
        </View>
    );
}
