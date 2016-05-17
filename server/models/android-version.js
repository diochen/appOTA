module.exports = function(AndroidVersion) {

	AndroidVersion.disableRemoteMethod('upsert',true);
	AndroidVersion.disableRemoteMethod('exists',true);
	AndroidVersion.disableRemoteMethod('findOne',true);
	AndroidVersion.disableRemoteMethod('createChangeStream',true);
	AndroidVersion.disableRemoteMethod('updateAll',true);
	// AndroidVersion.disableRemoteMethod(,true);
	// AndroidVersion.disableRemoteMethod(,true);
	// AndroidVersion.disableRemoteMethod(,true);
	// AndroidVersion.disableRemoteMethod(,true);
	// AndroidVersion.disableRemoteMethod(,true);
	// AndroidVersion.disableRemoteMethod(,true);
	// AndroidVersion.disableRemoteMethod(,true);
	// AndroidVersion.disableRemoteMethod(,true);

    AndroidVersion.latest = function(cb) {
      console.log('findOne');
      AndroidVersion.findOne({order: 'id DESC'}, function(err, version){
      	console.log(err);
      	console.log(version);
      	version = err || version;
      	cb(null, version);
      })
      
    }
     
    AndroidVersion.remoteMethod(
        'latest', 
        {
          http: {verb: 'get'},
          //accepts: {},
          returns: {arg: 'data', type: 'object'}
        }
    );

};
