<script>

    let tomb1=[];
    let tomb2=[];
    for (let i=0; i<10; i++) {
        tomb1.push(Math.round(Math.random() * 100));
}
    for (let i=0; i<10; i++) {
        tomb2.push(Math.round(Math.random() * 100));
}

    document.write("A generált halmazok elemei:");
    document.write("<hr>Tömb1: ");
        for(i=0;i<tomb1.length;i++) {

            document.write(tomb1[i] + ",");
}
        document.write("<hr>Tömb2: ");
            for(let i=0;i<tomb2.length;i++)
            {
                document.write(tomb2[i] + ",");
}

            let metszet = [];

            for(i=0;i<tomb1.length;i++) {
	for(j=0;j<tomb2.length;j++) {
    	if (tomb1[i]==tomb2[j]) {
                metszet.push(tomb1[i])
            }	
    }

}

            document.write("<hr>Metszet:");
                for(let i=0;i<metszet.length;i++)
                {
                    document.write(metszet[i] + ",");
}





            </script>






            <script>

                let tomb1=[];
                let tomb2=[];
                for (let i=0; i<10; i++) {
                    tomb1.push(Math.round(Math.random() * 100));
}
                for (let i=0; i<10; i++) {
                    tomb2.push(Math.round(Math.random() * 100));
}

                document.write("A generált halmazok elemei:");
                document.write("<hr>Tömb1: ");
                    for(i=0;i<tomb1.length;i++) {

                        document.write(tomb1[i] + ",");
}
                    document.write("<hr>Tömb2: ");
                        for(let i=0;i<tomb2.length;i++)
                        {
                            document.write(tomb2[i] + ",");
}

                        let metszet = [];

                        for(i=0;i<tomb1.length;i++) {
	for(j=0;j<tomb2.length;j++) {
                            let szerepelE=false;
                        if (tomb1[i]==tomb2[j]) {
                            let szerepelE=false;
        }
                        for(k=0;k<metszet.length;k++) {
            	if (tomb1[i]==metszet[k]) {
                            szerepelE == true
                        }
            }
                        if (szerepelE==false) {
                            metszet.push(tomb1[i])
                        }
    }
}

                        document.write("<hr>Metszet:"+metszet);



                        </script>

