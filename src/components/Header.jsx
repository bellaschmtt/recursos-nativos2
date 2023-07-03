import { Text, View, StyleSheet } from "react-native";
import * as Battery from "expo-battery";
const styles = StyleSheet.create({
    header: {
        padding: 20,
        paddingBottom: 20,
        paddingHorizontal: 5,
    },
    headerTextStyle: {
        marginTop: 20,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default function Header({title}) {
    const [nivelBateria, setNivelBateria] = useState();
    const [background, setBackground] = useState();
    // const [textoBateria, setTextoBateria] = useState("");

    const mudarCor = () => {
        if (nivelBateria < 20) {
            setBackground("#fc0b03");
            setTextoBateria("Bateria fraca");
        } 
        else if (nivelBateria < 50) {
            setBackground("#fca903");
            setTextoBateria("Bateria OK");
        }   
        else if (nivelBateria < 80) {
            setBackground("#fcf803");
            setTextoBateria("Bateria parcialmente carregada");
        } 
        else {
            setBackground("#1cfc03");
            setTextoBateria("Bateria carregada");
        }
    };

    async function atualizarTudo() {
        bateria();
    }
    
    async function bateria() {
        const nivel = await Battery.getBatteryLevelAsync();
        setNivelBateria(nivel * 100);
    }
    
    useEffect(() => {
        bateria();
        mudarCor();
    }, [{ nivelBateria }]);
    
    function atualizarTudo() {
        bateria();
        mudarCor();
    }
    return(
        <View style={{ backgroundColor: background, width: 800, height: 50 }}>
            <View style={styles.header}>
                <Text style={styles.headerTextStyle}>
                {title}
                </Text>
                <Button title="Atualizar" onPress={atualizarTudo} />
      
            </View>
        </View>
    )
}