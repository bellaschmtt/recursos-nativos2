import { useCallback, useState } from "react";
import { useEffect } from "react";
import * as Contacts from "expo-contacts";
import { StyleSheet, Text, View } from "react-native";


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
                Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers,
            ],
        })
         setContact(data)
        console.log(contacts);

        // if (data.length > 0) {
        //     const contact = data[0];
        //     console.log(contacts);
        // }
    }

    useEffect((
        useCallback(() => {
            (async () => {
                const { status } = await Contacts.requestPermissionsAsync();
                if (status === 'granted') {
                    carregarContatos();
                }
            })();
        })
    ), []);

    return (
        <View styles={styles.container}>
            <Text>Contatos</Text>
            <View>
                {
                    contacts
                    ? <FileList
                        styles={{
                            flex: 1,
                            gap: 10,
                        }}
                        data={contacts}
                        keyExtractor={(item) => item.idtoString()}
                        renderItem={({ item }) => {
                            <Items 
                             item
                            />
                        }}
                        
                    />
                    : <></>

                }
            </View>
        </View>
    );
}
