export default function Noticias() {
  return (
    <WebView style={{ flex: 1 }}
      source={{ uri: 'https://www.institutoponte.org.br/blog/' }}
    />
  );
}