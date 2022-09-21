import webview

if __name__ == '__main__':
  window = webview.create_window(title="Cable Analytics",url="./web/dist/index.html")
  webview.start(debug=True,gui="qt")
  pass