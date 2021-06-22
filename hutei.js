document.getElementById("hutei").addEventListener("click",function (){
    const a=[],b=[];

    if(document.getElementById("b").value<0){
        b.push(document.getElementById("b").value*-1);
    }else{
        b.push(document.getElementById("b").value);
    }
    a.push(document.getElementById("a").value);

    const r=[],q2=[];
    let q,r2,i=0;

    while(r2!==0){
        q = (a[i]/b[i]);
        q2.push(parseInt(q,10));
        r.push(a[i]%b[i]);
        document.getElementById("ans").value += (a[i]+"="+b[i]+"*"+q2[i]+"+"+r[i]) + "\n";
        a.push(b[i]);
        b.push(r[i]);
        r2 = r[i];
        i += 1;
    }

    let i2 = i-1;

    while(i2 !== -1){
        q2[i2] *= -1;
        i2--;
    }

    i -= 1;
    q2[i] = 1;
    
    let z = q2[i-1];
    let w = q2[i]+q2[i-1]*q2[i-2];
    
    let y;
    
    if(i<2){
        z = r[0];
        w = q2[0];
    }else{
        y = z;
        z = w;
        w = y;
        w = w+z*q2[i-3];
        i--;
    }

    if(document.getElementById("b").value<0){
        w *=-1;
        a[0] *=-1;
    }

    if(document.getElementById("c").value !== 1){
        z *= document.getElementById("c").value
        w *= document.getElementById("c").value
    }
    
    document.getElementById("ans").value　+=　("特殊解はx="+z+","+"y="+w) + "\n";
    document.getElementById("ans").value　+=　("一般解はx="+b[0]+"m+("+z+")  y="+a[0]*-1+"m+("+w+")(mは整数)");
});
