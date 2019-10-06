
  Pod::Spec.new do |s|
    s.name = 'MomoPlugin'
    s.version = '0.0.1'
    s.summary = 'momo payment'
    s.license = 'MIT'
    s.homepage = 'https://github.com/tuan2603/PluginMomo.git'
    s.author = 'TuanTM'
    s.source = { :git => 'https://github.com/tuan2603/PluginMomo.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end