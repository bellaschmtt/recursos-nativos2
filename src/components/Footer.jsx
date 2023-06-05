import { Button } from "react-native";


const styles = ({
    footer:{
        backgroundColor: '#000',
        paddingHorizontal: 25,
        padding: 20,
    }
});

export default function Footer(){
    return(
        <View style={styles.footer}>
            <Button
                title="Sair"
            />
        </View>
    )
}

